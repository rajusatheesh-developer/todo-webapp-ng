pipeline {
    agent any

    // environment {
    //     NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    // }

    stages {
        stage('Build') {
             agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root:root' // Run as root to avoid permission issues
                    reuseNode true
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

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root:root' // Run as root to avoid permission issues
                    reuseNode true
                }
            }

            steps {
                sh 'test -f dist/todo-webapp-ng/index.html'
                sh 'npm test'
            }
        }
    }
}
