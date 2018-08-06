class Item {
  int _id;
  String _name;
  String _description;
  double _price;
  int _category;
  int _ratings;

  Item(this._id, this._name, this._description);

  Item.map(dynamic obj) {
    this._id = obj["id"];
    this._name = obj["name"];
    this._description = obj["description"];
    this._price = obj["price"];
    this._category = obj["category"];
    this._ratings = obj["ratings"];
  }

  int get id => _id;
  String get name => _name;
  String get description => _description;
  double get price => _price;
  int get category => _category;
  int get ratings => _ratings;

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["id"] = _id;
    map["name"] = _name;
    map["description"] = _description;
    map["price"] = _price;
    map["category"] = _category;
    map["ratings"] = _ratings; 
    return map;
  }
}
