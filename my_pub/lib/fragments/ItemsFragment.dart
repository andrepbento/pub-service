import 'package:flutter/material.dart';
import 'package:my_pub/globals.dart' as globals;

class ItemsFragment extends StatefulWidget {
  @override
  _ItemsFragmentState createState() => _ItemsFragmentState();
}

class _ItemsFragmentState extends State<ItemsFragment> {
  String categoriesUrl = globals.pubApi + globals.categoriesRes;

/*
  Future<List<Item>> _fetchCategories() async {
    print(categoriesUrl);
    var response = await http.get(Uri.encodeFull(categoriesUrl),
        headers: {"Accept": "application/json"});
    print(response);
    List categoryList = json.decode(response.body);
    return categoryList.map((m) => new Item.fromJson(m)).toList();
  }*/

  @override
  Widget build(BuildContext context) {
    return new Center(
      child: new Text(
        'ItemsFragment',
        style: TextStyle(color: Colors.red),
      ),
    );
  }
}
