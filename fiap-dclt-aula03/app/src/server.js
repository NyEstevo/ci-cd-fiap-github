const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 FIAP Todo API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📋 API docs: http://localhost:${PORT}/api/todos`);
  console.log(`📈 Stats: http://localhost:${PORT}/api/stats`);
  console.log(`🐳 Container: ${require('os').hostname()}`);
  console.log(`🏷️ Version: ${process.env.VERSION || '1.0.0'}`);
  console.log(`🎨 Deployment: ${process.env.DEPLOYMENT_COLOR || 'unknown'}`);
});