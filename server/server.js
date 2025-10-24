const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const EXPENSES_FILE = path.join(DATA_DIR, 'expenses.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Helper functions to read/write data
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    // Create default admin user if file doesn't exist
    const defaultUsers = [
      {
        id: uuidv4(),
        name: 'Admin',
        username: 'admin',
        password: 'admin123',
        isAdmin: true,
        qrCode: null
      }
    ];
    await writeUsers(defaultUsers);
    return defaultUsers;
  }
}

async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

async function readExpenses() {
  try {
    const data = await fs.readFile(EXPENSES_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    // Return empty array if file doesn't exist
    await writeExpenses([]);
    return [];
  }
}

async function writeExpenses(expenses) {
  await fs.writeFile(EXPENSES_FILE, JSON.stringify(expenses, null, 2));
}

// Auth endpoints
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await readUsers();
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      res.json({ success: true, user: userWithoutPassword });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// User management endpoints
app.get('/api/users', async (req, res) => {
  try {
    const users = await readUsers();
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json(usersWithoutPasswords);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const users = await readUsers();
    
    // Check if username already exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }
    
    const newUser = {
      id: uuidv4(),
      name,
      username,
      password,
      isAdmin: false,
      qrCode: null
    };
    
    users.push(newUser);
    await writeUsers(users);
    
    const { password: _, ...userWithoutPassword } = newUser;
    res.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, password, qrCode } = req.body;
    const users = await readUsers();
    
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Check if username already exists (excluding current user)
    if (username && users.find(u => u.username === username && u.id !== id)) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }
    
    // Update user data
    if (name) users[userIndex].name = name;
    if (username) users[userIndex].username = username;
    if (password) users[userIndex].password = password;
    if (qrCode !== undefined) users[userIndex].qrCode = qrCode;
    
    await writeUsers(users);
    
    const { password: _, ...userWithoutPassword } = users[userIndex];
    res.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await readUsers();
    
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Don't allow deleting admin users
    if (users[userIndex].isAdmin) {
      return res.status(400).json({ success: false, message: 'Cannot delete admin user' });
    }
    
    users.splice(userIndex, 1);
    await writeUsers(users);
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Expense endpoints
app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await readExpenses();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { description, amount, paidBy, participants, category, date } = req.body;
    const expenses = await readExpenses();
    
    const newExpense = {
      id: uuidv4(),
      description,
      amount: parseFloat(amount),
      paidBy,
      participants,
      category,
      date: date || new Date().toISOString()
    };
    
    expenses.push(newExpense);
    await writeExpenses(expenses);
    
    res.json({ success: true, expense: newExpense });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.delete('/api/expenses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const expenses = await readExpenses();
    
    const expenseIndex = expenses.findIndex(e => e.id === id);
    if (expenseIndex === -1) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }
    
    expenses.splice(expenseIndex, 1);
    await writeExpenses(expenses);
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
async function startServer() {
  await ensureDataDir();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📁 Data directory: ${DATA_DIR}`);
  });
}

startServer().catch(console.error);