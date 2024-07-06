pipeline {
    agent any
    stages {
        stage('Build') {
             agent {
                docker {
                    image 'node:18-alpine'
                }
             }


            steps {
                echo 'building project'
                sh '''
                   ls -a 
                   node --version
                   npm --version
                   npm ci
                   npm run build 
                   '''
            }
        }
    }
}
