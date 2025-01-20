@echo off
setlocal enabledelayedexpansion

:: Define the base directory where the project files will be created
set BASE_DIR=src\main\java\com\example\todo

:: Create the necessary directories
mkdir %BASE_DIR%\model
mkdir %BASE_DIR%\service
mkdir %BASE_DIR%\repository
mkdir %BASE_DIR%\controller

:: Create the Todo.java file in the model directory (empty file)
type nul > %BASE_DIR%\model\Todo.java

:: Create the TodoService.java file in the service directory (empty file)
type nul > %BASE_DIR%\service\TodoService.java

:: Create the TodoRepository.java file in the repository directory (empty file)
type nul > %BASE_DIR%\repository\TodoRepository.java

:: Create the TodoController.java file in the controller directory (empty file)
type nul > %BASE_DIR%\controller\TodoController.java
