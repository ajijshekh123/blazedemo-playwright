pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {

            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {

            steps {
                bat 'npx playwright install'
            }
        }

        stage('TypeScript Validation') {

            steps {
                bat 'npm run typecheck'
            }
        }

        stage('Run Playwright Tests') {

            steps {
                bat 'npm test'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts:
                'playwright-report/**',
                allowEmptyArchive: true

            junit allowEmptyResults: true,
                  testResults: '**/results.xml'
        }
    }
}