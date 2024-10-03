pipeline {
  agent { label 'linux' }

  parameters {
    string(
      name: 'IMAGE_TAG',
      defaultValue: params.IMAGE_TAG ?: '',
      description: 'Optional Docker image tag to push.'
    )
    string(
      name: 'DOCKER_REGISTRY',
      description: 'Docker registry ',
      defaultValue: params.DOCKER_REGISTRY ?: 'harbor.status.im',
    )
  }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    IMAGE_NAME = 'acid-info-private/logos-ordinals-dashboard'
    NEXT_PUBLIC_SITE_URL = "https://${env.JOB_BASE_NAME}"
  }

  stages {
    stage('Build') {
      steps {
        script {
          image = docker.build(
            "${DOCKER_REGISTRY}/${IMAGE_NAME}:${GIT_COMMIT.take(8)}",
          )
        }
      }
    }

    stage('Push') {
      steps {
        script {
          withDockerRegistry([credentialsId: 'harbor-acid-info-private-robot', url: 'https://${DOCKER_REGISTRY}']) {
            image.push()
          }
        }
      }
    }

    stage('Deploy') {
      when { expression { params.IMAGE_TAG != '' } }
      steps {
        script {
          withDockerRegistry([credentialsId: 'harbor-acid-info-private-robot', url: 'https://${DOCKER_REGISTRY}']) {
            image.push(params.IMAGE_TAG)
          }
        }
      }
    }
  }

  post {
    cleanup { cleanWs() }
  }
}
