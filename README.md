# Docker-testapp

#### Info:

In this app, we are using `MongoDB` for Database, but we haven't set it up.

We are going to set it using `Docker`. For that we gonna need two images :
	1. mongo
	2. mongo-express ( a user interface for our mongo database )

***Note: We are NOT seting it up in our system. We are setting it in Docker.** *

***Also, we want both of our containers to interact with each other without any `port` or `limitation`. For which, we are going to use `Docker Network`.
	`Docker Network` is like an `isolated network area` & Containers inside a specific docker network can interact with each other without any limitations.

---

-> For `mongo` container:

Go to : Docker_testapp\References\images\1770547027322.png

-> For `mongo-express` container:

Go to : Docker_testapp\References\images\1770548213468.png

Note : In the `MONGODB_URL` environment variable, that `mongo` after `@` is the name of our `mongo image's container`.

---
