# Works Aggregation NestJS Apis

This is a POC back end apis developed in order to return list of works, and aggregation by projects and employees based on your needs.

## Installation

I used npm to manage dependencies, just follow below the command to install them

```bash
  npm install
```

Then, change folder and start the project as follow:

```bash
  cd aggregations-be
  npm run start:dev
```

## API Reference

#### Hello world

```http
  GET /
```

| Parameter | Description                          |
| :-------- | :----------------------------------- |
| `none`    | Is just a simple **hello world api** |

#### Get Works

```http
  GET /works
```

| Parameter | Description                          |
| :-------- | :----------------------------------- |
| `none`    | This api will return **list of works** |

#### Get works aggregated by projectIds

```http
  GET /works/byProjects
```

| Parameter    | Type     | Description                       |
| :--------    | :------- | :-------------------------------- |
| `projectIds` | `string` | **Required**. Ids of projects for works to be aggregated by them (like projectIds=1,2....) |

#### Get works aggregated by projectIds and employeeIds

```http
  GET /works/byProjectsAndEmployees
```

| Parameter    | Type     | Description                       |
| :--------    | :------- | :-------------------------------- |
| `projectIds`, `employeeIds`  | `string` | **Required**. Ids of projects and employees for works to be aggregated by them (like projectIds=1,2&employeeIds=1,2....) |

#### Get works aggregated by employeeIds and projectIds 

```http
  GET /works/byProjectsAndEmployees
```

| Parameter    | Type     | Description                       |
| :--------    | :------- | :-------------------------------- |
| `projectIds`, `employeeIds`  | `string` | **Required**. Ids of projects and employees for works to be aggregated by them (like projectIds=1,2&employeeIds=1,2....) |