pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'echo "Building the application"'
                // Add your build steps here
            }
        }
        
        stage('Test') {
            steps {
                sh 'echo "Running tests"'
                // Add your test steps here
            }
        }
        
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'docker-hub-credentials', variable: 'DOCKER_HUB_PWD')]) {
                        sh 'docker login -u matin235-ops -p $DOCKER_HUB_PWD'
                        sh 'docker build -t matin235-ops/web-mini-project:latest .'
                        sh 'docker push matin235-ops/web-mini-project:latest'
                    }
                }
            }
        }
    }
}