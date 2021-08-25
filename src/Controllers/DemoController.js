export class DemoController {
  constructor() {}

  async get(request, response) {
    return response.json({ msg: "Controller get route working!" });
  }

  async post(request, response) {
    console.log(request.body);
    return response.json({ msg: "Controller post route working!" });
  }
}
