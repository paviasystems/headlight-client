//run only on nodes with docker (label) installed
node('docker'){
    dir('/Pavia/headlight-client') {
        git credentialsId: 'e1340a16-bdab-4d7f-9cba-51cc21229bc2', url: 'https://github.com/paviasystems/headlight-client.git'

        try
        {
            stage('Build') {
                sh 'echo "build number = $BUILD_NUMBER"'
                sh './codegen.sh'
                sh 'gulp build'
            }
            stage('Test') {
                sh 'npm install'
                sh 'npm test'
            }
            stage('Deploy') {
                sh 'sed -i \'\' "s/\\"version\\": \\"3.0.*\\"/\\"version\\": \\"3.0.$BUILD_NUMBER\\"/" ./package.json'
                sh 'npm publish .'

                slackSend color: 'good', message: "headlight-client: npm published v3.0.${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
            }
        } catch (Exception ex) {
            slackSend color: 'danger', message: "headlight-client:master Build Failed (<${env.BUILD_URL}|Open>)"
        }
    }
}