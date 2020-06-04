const PORT = process.env.PORT;

// 60 seg * 60 min * 24 hours * 30 days
const TIME_TOKEN = 60 * 60 * 24 * 30;
const SEED = 'este-es-el-seed-app';

module.exports =  {
    PORT,
    TIME_TOKEN,
    SEED
}