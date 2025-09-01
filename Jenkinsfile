pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/KhaddyX/Html-Portfolio', branch: 'main'
            }
        }
        stage('Lint') {
            steps {
                echo 'Checking HTML, CSS, and JS for errors...'
                // Install htmlhint if not present
                sh 'npm install -g htmlhint || true'
                // Lint all HTML files
                sh 'htmlhint **/*.html || true'
            }
        }
        stage('Build/Prepare') {
            steps {
                echo 'No real build needed, just preparing files...'
                sh 'mkdir -p dist && cp -r * dist/'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying site to GitHub Pages...'
                // Replace these with your actual deploy script
                sh '''
                    echo "Deploy step running..."
                    # Example: git push to gh-pages branch
                '''
            }
        }
    }
    post {
        always {
            mail to: 'silverkhaddy@gmail.com',
                subject: "HTML Project Pipeline: ${currentBuild.fullDisplayName}",
                body: "Your build completed, check details: ${env.BUILD_URL}"
        }
    }
}
