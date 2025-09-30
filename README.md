# PictuRAS

**Your personal, intuitive and powerful image editor.**

PictuRAS is a comprehensive web-based image editing platform that combines traditional image processing tools with cutting-edge AI capabilities. Built as a microservices architecture, it provides users with an intuitive interface for editing images, applying effects, and leveraging AI-powered features for smart enhancements.

## 🚀 Features

### Core Image Processing

- **Basic Editing**: Brightness, contrast, saturation adjustments
- **Geometric Operations**: Resize, rotate, crop with AI-assisted smart cropping
- **Advanced Filters**: Binarization, border effects, and custom enhancements
- **Bulk Processing**: Process multiple images efficiently

### AI-Powered Tools

- **Background Removal**: AI-powered background removal for clean cutouts
- **Smart Cropping**: AI-assisted intelligent cropping based on content analysis
- **Object Detection**: Detect and identify objects in images using YOLO models
- **People Detection**: Count and detect people in images
- **Text Recognition**: OCR capabilities for text extraction from images
- **Image Enhancement**: AI-driven image quality improvements and upscaling

### User Management

- **Authentication**: Secure user registration and login
- **Subscription Plans**: Free and premium tiers with different usage limits
- **Project Management**: Organize and manage your image editing projects
- **Real-time Processing**: WebSocket-based real-time updates during processing

## 🏗️ Architecture

PictuRAS is built using a microservices architecture with the following components:

### Frontend

- **Technology**: Next.js 15 with React 19, TypeScript, and Tailwind CSS
- **Port**: 3000
- **Features**: Modern, responsive UI with real-time updates

### Backend Services

- **API Gateway**: Central entry point for all API requests (Port: 8000)
- **User Service**: User authentication and management (Port: 10001)
- **Project Service**: Project and image processing orchestration (Port: 9002)
- **Subscription Service**: Payment and subscription management (Port: 11001)
- **Image Storage Service**: File upload and management (Port: 11000)
- **WebSocket Gateway**: Real-time communication (Port: 4000)

### Processing Tools

- **Background Removal AI**: Advanced background removal using AI models
- **Object Detection AI**: YOLO-based object detection and classification
- **People Detection AI**: Person detection and counting
- **Text Recognition AI**: OCR for text extraction
- **Image Enhancement AI**: AI-powered image quality improvements
- **Traditional Tools**: Brightness, contrast, saturation, resize, rotate, crop, binarization, border effects

### Infrastructure

- **Message Queue**: RabbitMQ for asynchronous processing
- **Database**: MongoDB instances for different services
- **Storage**: MinIO for object storage
- **Load Balancer**: Nginx for request routing
- **Monitoring**: ELK stack for logging and monitoring (optional)

## 🛠️ Quick Start

### Prerequisites

- Docker and Docker Compose
- At least 8GB RAM (recommended for AI tools)
- Modern web browser

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd picturas
   ```

2. **Start the application**

   ```bash
   docker compose up
   ```

3. **Access the application**
   - Frontend: http://localhost:8080
   - API Gateway: http://localhost:8000
   - MinIO Console: http://localhost:9090 (admin/admin123)
   - RabbitMQ Management: http://localhost:15672 (user/password)

### First Steps

1. Open your browser and navigate to http://localhost:8080
2. Create a new account or use the anonymous mode
3. Start a new project and upload your first image
4. Explore the various editing tools and AI features

## 📁 Project Structure

```
picturas/
├── frontend/                 # Next.js frontend application
├── apiGateway/              # API Gateway service
├── users/                   # User management service
├── projects/                # Project orchestration service
├── subscriptions/           # Subscription management service
├── imageStorageService/     # Image storage service
├── wsGateway/              # WebSocket gateway
├── minio/                  # MinIO storage service
├── Tools/                  # Image processing tools
│   ├── bg_remove_ai/       # AI background removal
│   ├── obj_ai/             # Object detection AI
│   ├── people_ai/          # People detection AI
│   ├── text_ai/            # OCR text recognition
│   ├── upgrade_ai/         # Image enhancement AI
│   ├── cut_ai/             # Smart cropping AI
│   └── [traditional tools] # Brightness, contrast, etc.
├── rabbitMQ/               # Message queue configuration
├── nginx/                  # Load balancer configuration
└── docker-compose.yaml     # Service orchestration
```

## 🎯 Usage

### For Users

1. **Create Account**: Register for a free account or use anonymous mode
2. **Start Project**: Create a new project and upload images
3. **Edit Images**: Use the intuitive toolbar to apply various effects
4. **AI Features**: Leverage AI tools for smart enhancements
5. **Export Results**: Download processed images individually or as a batch

### For Developers

- The system uses a message queue architecture for scalable processing
- Each tool is containerized and can be scaled independently
- Real-time updates are provided via WebSocket connections
- All services are stateless and can be deployed across multiple instances

## 🔧 Configuration

### Environment Variables

- `JWT_SECRET_KEY`: Secret key for JWT token generation
- `FREE_DAILY_OP`: Daily operation limit for free users (default: 5)
- `MINIO_ROOT_USER`: MinIO storage username
- `MINIO_ROOT_PASSWORD`: MinIO storage password
- `RABBITMQ_USER`: Message queue username
- `RABBITMQ_PASS`: Message queue password

### Scaling

- Increase the number of tool instances in docker-compose.yaml
- Adjust resource limits based on your hardware capabilities
- Monitor processing queues through RabbitMQ management interface

## 👥 Authors

This project was developed by **Group A** students in the context of the Curricular Unit _Requisitos e Arquiteturas de Software_, University of Minho (2024/2025):

- **PG55926** - Carlos Alberto Ribeiro
- **PG55932** - Diogo Cardoso Ferreira
- **PG55934** - Diogo Gomes Matos
- **PG55946** - Guilherme João Fernandes Barbosa
- **PG57558** - João Henrique Costa Ferreira
- **PG55958** - João Manuel Matos Fernandes
- **PG55969** - José Filipe Ribeiro Rodrigues
- **PG55973** - Juciano Gomes Farias Junior
- **PG55989** - Nuno Ricardo Silva Gomes

_Note: Some minor improvements and adjustments have been introduced by the course lecturers._

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

### What this means:

- ✅ **Share**: You may copy and redistribute the material in any medium or format
- ✅ **Adapt**: You may remix, transform, and build upon the material
- ✅ **Attribution**: You must give appropriate credit to the original authors
- ❌ **Commercial Use**: You may not use the material for commercial purposes without explicit consent from all authors
- ✅ **Share Alike**: If you remix, transform, or build upon the material, you must distribute your contributions under the same license

### For Contributors:

- New students and contributors are welcome to contribute to the project
- All contributions must maintain the same license terms
- Commercial use requires explicit consent from all original authors
- Any derivative works must be shared under the same license

## 🤝 Contributing

We welcome contributions from new students and developers! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Remember that all contributions must comply with the license terms and maintain the educational nature of the project.

## 📞 Support

For questions, issues, or contributions, please:

- Open an issue in the repository
- Contact the original authors through the university channels
- Follow the academic guidelines for collaborative projects

---

**PictuRAS** - Empowering creativity through intelligent image editing.
