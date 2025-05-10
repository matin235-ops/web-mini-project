pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'echo "Building the application"'
                // Add your build steps here
            }
        }
        
        stage('Test') {
            steps {
                bat 'echo "Running tests"'
                // Add your test steps here
            }
        }
        
        stage('Build and Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', 
                                                     usernameVariable: 'DOCKER_HUB_USER', 
                                                     passwordVariable: 'DOCKER_HUB_PWD')]) {
                        bat 'docker login -u %DOCKER_HUB_USER% -p %DOCKER_HUB_PWD%'
                        bat 'docker build -t matin235-ops/web-mini-project:latest .'
                        bat 'docker push matin235-ops/web-mini-project:latest'
                    }
                }
            }
        }
    }
}