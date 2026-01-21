pipeline {
  agent any

  environment {
    IMAGE_NAME = "ghcr.io/vikasrajput0112/food-react-website"
    TAG = "${BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/vikasrajput0112/food-react-website.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build -t $IMAGE_NAME:$TAG ."
      }
    }

    stage('Push Image') {
      steps {
        withCredentials([string(credentialsId: 'github-jenkins', variable: 'TOKEN')]) {
          sh """
          echo $TOKEN | docker login ghcr.io -u vikasrajput0112 --password-stdin
          docker push $IMAGE_NAME:$TAG
          """
        }
      }
    }
  }
}
