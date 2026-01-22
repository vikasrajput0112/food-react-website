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
    stage('Update GitOps Repo') {
  steps {
    withCredentials([string(credentialsId: 'github-jenkins', variable: 'GITHUB_TOKEN')]) {
      sh """
        rm -rf food-react-gitops
        git clone https://$GITHUB_TOKEN@github.com/vikasrajput0112/food-react-gitops.git

        cd food-react-gitops

        sed -i 's|image: ghcr.io/vikasrajput0112/food-react-website:.*|image: ghcr.io/vikasrajput0112/food-react-website:${BUILD_NUMBER}|' k8s/deployment.yaml

        git config user.email "ci-bot@jenkins"
        git config user.name "jenkins-bot"

        git add k8s/deployment.yaml
        git commit -m "Auto deploy image ${BUILD_NUMBER}"
        git push origin main
      """
    }
  }
}

  }
}
