# reserve-my-life
I want to lend out my bedroom and car to appropiate users

# Dev Docs are at
https://github.com/posix4e/example-app
 - This uses gcloud for deployment to staging you will need gcloud installed
 - This uses auth0 for authentication and is tied to my account info
 - It uses travis for testing and deployment


If you run the frontend only, it will automatically point to the backend in staging.
 If you need to modify the testing database you will want to use the built in nginx
which mimicks staging/production on port 8000. Note you cannot run both at the same 
time due to bad port choices on my part.


In production used a sidecar cloud sql proxy with
```
          env:
            ...
            - name: READ_SERVICE_HOST
              value: "127.0.0.1"
            - name: WRITE_SERVICE_HOST
              value: "127.0.0.1"
            - name: READ_USER
              valueFrom:
                secretKeyRef:
                  name: cloudsql
                  key: username
            - name: READ_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cloudsql
                  key: password
            - name: READ_DATABASE
              # DIFFERENT FOR PROD/STAGING
              value: "FillMeIn"   #production
            - name: WRITE_USER
              valueFrom:
                secretKeyRef:
                  name: cloudsql
                  key: username
            - name: WRITE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cloudsql
                  key: password
            - name: WRITE_DATABASE
              # DIFFERENT FOR PROD/STAGING
              value: "FillMeIn"   #production
              ...
  # copypasta'd from https://cloud.google.com/sql/docs/container-engine-connect
        - image: "gcr.io/cloudsql-docker/gce-proxy"
          name: cloudsql-proxy
          command: ["/cloud_sql_proxy", "--dir=/cloudsql",
                    "-instances=...",
                    "-credential_file=/secrets/cloudsql/credentials.json"]
          volumeMounts:
            - name: cloudsql-oauth-credentials
              mountPath: /secrets/cloudsql
              readOnly: true
            - name: ssl-certs
              mountPath: /etc/ssl/certs
            - name: cloudsql
              mountPath: /cloudsql
      volumes:
        - name: cloudsql-oauth-credentials
          secret:
            secretName: cloudsql-oauth-credentials
        - name: ssl-certs
          hostPath:
            path: /etc/ssl/certs
        - name: cloudsql
          emptyDir:
``` 
To our k8s config. Please make sure you check with your version of gcloud and tell me if that command goes stale. 
