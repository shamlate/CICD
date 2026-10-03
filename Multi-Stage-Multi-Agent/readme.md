we will artifcat / output of build in  cd /var/lib/jenkins/workspace/Multi-Stage-Multi-Agent2/Multi-Stage-Multi-Agent/backend/ on EC2 

<img width="1541" height="323" alt="image" src="https://github.com/user-attachments/assets/d093df19-0a0e-45b8-8117-ce571f0e4f55" />


but there will not .jr file because w e used mvn clean test , if want to jar file use mvn clean package in backendstage of pipline 

 Then you should see something like:

target/
├── classes/
├── test-classes/
└── demo-0.0.1-SNAPSHOT.jar



