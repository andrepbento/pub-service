import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:my_pub/globals.dart' as globals;
import 'package:my_pub/models/Category.dart';

class CategoriesFragment extends StatefulWidget {
  @override
  _CategoriesPageState createState() => new _CategoriesPageState();
}

class _CategoriesPageState extends State<CategoriesFragment> {
  int _count = 0;

  String categoriesUrl = globals.pubApi + globals.categoriesRes;

  Future<List<Category>> _fetchCategories() async {
    print(categoriesUrl);
    var response = await http.get(Uri.encodeFull(categoriesUrl),
        headers: {"Accept": "application/json"});
    print(response);
    List categoryList = json.decode(response.body);
    return categoryList.map((m) => new Category.fromJson(m)).toList();
  }

  List<Widget> _getItems() {
    var items = <Widget>[];
    for (int i = _count; i < _count + 4; i++) {
      var item = new Column(
        children: <Widget>[
          new ListTile(
            title: new Text("Item $i"),
          ),
          new Divider(
            height: 2.0,
          )
        ],
      );

      items.add(item);
    }
    return items;
  }

  @override
  Widget build(BuildContext context) {
    var futureBuilder = new FutureBuilder(
      future: _fetchCategories(),
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        switch (snapshot.connectionState) {
          case ConnectionState.none:
          case ConnectionState.waiting:
            return new Text('Loading categories...');
          default:
            if (snapshot.hasError)
              return new Text('Error: ${snapshot.error}');
            else
              return createCategoriesListView(context, snapshot);
        }
      },
    );

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Categories Page"),
      ),
      body: futureBuilder,
    );
  }

  Widget createCategoriesListView(
      BuildContext context, AsyncSnapshot snapshot) {
    List<Category> categories = snapshot.data;
    return new ListView.builder(
      itemCount: categories.length,
      itemBuilder: (context, index) {
        final item = categories[index];
        return ListTile(
          leading: Icon(Icons.check_circle),
          title: Text(
            item.name,
          ),
          subtitle: Text(
            item.description,
          ),
        );
      },
    );
  }
}
