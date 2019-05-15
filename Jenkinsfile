pipeline {
   agent any

   stages {
     stage('Prepare') {
       steps {
         sh 'export PATH=/usr/local/bin'
       }
     }
     stage('Build') {
       steps {
         sh 'npm install'
       }
     }
     stage('Test') {
       steps {
         sh 'npm test'
       }
     }
   }
 }
