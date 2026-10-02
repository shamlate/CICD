A simple jenkins pipeline to verify if the docker as worker configuration is working as expected.


 This is a Jenkins Declarative Pipeline. Its purpose is very simple: start a Docker container containing Node.js, then print the Node.js version.

# A Jenkins pipeline normally contains things like:

**agent** → where/how the job runs--
this tells Jenkins where to execute the pipeline.
Instead of running directly on the Jenkins machine, Jenkins is being told:
"Run this pipeline inside a Docker container."


**stages** → major phases of the job
This contains the different phases of your pipeline.

**steps** → commands executed in each stage



