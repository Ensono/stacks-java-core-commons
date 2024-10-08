# Stacks core-commons module

## Module Overview

This module provides common code used by more than one of the Stacks modules: Both [Events](https://github.com/Ensono/stacks-java-core-messaging/)
and [CQRS Commands](https://github.com/Ensono/stacks-java-core-cqrs/) use the `OperationsContext` abstract
class and `StacksPersistence` provides a basic CRUD repository interface used in persistence related
modules like[Stacks Cosmos](https://github.com/Ensono/stacks-java-cosmos). Please refer to these
modules as examples.

## Module Structure

In the following diagram, you can see all the relevant files of this module. Be aware, pulling from
the repository will have some extra files that are not relevant to the logic but required to build and
deploy.

### Project structure

    java
    |_pom.xml
    \_src
    : \_main
    :   \_java
    :    \_com.ensono.stacks.core
    :     \_operations
    :      |_OperationContext.java
    :     \_repository
    :      |_StacksPersistence.java

## How to use

Use it as a dependency.

### Use it as a dependency

#### Maven

In the `dependencies` section of your application's `pom.xml` add:

```xml
<dependency>
    <groupId>com.ensono.stacks.modules</groupId>
    <artifactId>stacks-core-commons</artifactId>
    <version>2.0.0</version>
</dependency>
```

Then you can do a `./mvnw clean compile` to fetch it; after that, you can use it like any other dependency.

```bash
./mvnw clean compile
```

#### Others

Use it as you'd use any dependency in your build tool.

### Building the module locally from this repository

To build the module locally:

1.  Clone this repo
2.  Navigate to the `java` folder
3.  run `./mvnw clean install` to install the module locally.
4.  Add it as any other [dependency](#use-it-as-a-dependency)
