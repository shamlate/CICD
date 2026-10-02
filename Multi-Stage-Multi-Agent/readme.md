                         Jenkins Pipeline
                               │
                         agent none
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
     Back-end             Front-end            Database
          │                    │                    │
          ▼                    ▼                    ▼
   Maven + Java 11         Node + npm          PostgreSQL ---this wil works as dokcer agent 
      Docker                 Docker              Docker
          │                    │                    │
          ▼                    ▼                    ▼
    mvn --version         node --version       psql --version

    



