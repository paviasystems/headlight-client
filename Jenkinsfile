//run only on nodes with docker (label) installed
node('nodejs,docker'){
    dir('/Pavia/headlight-client') {
        git credentialsId: 'e1340a16-bdab-4d7f-9cba-51cc21229bc2', url: 'https://github.com/paviasystems/headlight-client.git'

        try {
            sh 'echo "build number = $BUILD_NUMBER"'
            sh './codegen.sh'
            sh 'sed -i \'\' "s/\\"version\\": \\"3.0.*\\"/\\"version\\": \\"3.0.$BUILD_NUMBER\\"/" ./package.json'
            sh 'npm publish .'

            currentBuild.result = 'SUCCESS'
        } catch (Exception err) {
            currentBuild.result = 'FAILURE'
        }

        if (currentBuild.result == "SUCCESS") {
            slackSend color: 'good', message: "headlight-client: npm published v3.0.${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        else {
            slackSend color: 'danger', message: "headlight-client:master Build Failed (<${env.BUILD_URL}|Open>)"
        }
    }
}