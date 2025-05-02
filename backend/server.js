const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const stripeRoutes = require('./routes/stripe');

dotenv.config();

const app = express();


const corsOptions = {
  origin: 'https://relaxed-selkie-90bd29.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));


app.use(helmet());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));


app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/checkout', stripeRoutes);


app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

