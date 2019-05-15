pipeline {
   agent any

   stages {
     stage('Build') {
       steps {
         sh 'export PATH=/usr/local/bin'
         sh npm 'install'
       }
     }
     stage('Test') {
       steps {
         sh 'npm test'
       }
     }
   }
 }
