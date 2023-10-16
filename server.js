 class LoadController {
    @GetMapping("/load")
    public String index() {
        return "load";
    }

    @GetMapping("/get-load")
    @ResponseBody
    public String load() {
        return "<h1>Hello, htmx</h1>";
    }
}