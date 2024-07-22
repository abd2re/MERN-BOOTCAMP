class Object:
    def __init__(self, title, **args) -> None:
        self.title: str = title
        self.attributes: dict[str, any] = args


attr: dict[str, any] = {"name": "abd", "age": 18}

new_obj: Object = Object("person", **attr)


print(getattr(new_obj, "title"))
