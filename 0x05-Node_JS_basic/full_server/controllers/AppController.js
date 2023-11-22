// Creates a class named AppController. Add a static method named getHomepage
// The method accepts request and response as argument.
// It returns a 200 status and the message Hello Holberton School!
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
