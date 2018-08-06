import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_pub/colors.dart';
import 'package:my_pub/fragments/HomeFragment.dart';
import 'package:my_pub/fragments/ItemsFragment.dart';
import 'package:my_pub/fragments/PubsFragment.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomeScreenState createState() => new _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  final drawerItems = [
    new DrawerItem('Pubs', Icons.brightness_high),
    new DrawerItem('Items', Icons.brightness_low),
  ];

  final bottomBarItems = [
    new BottomBarItem(Icons.home),
    new BottomBarItem(Icons.search),
    new BottomBarItem(Icons.shopping_cart),
  ];

  AnimationController animationController;

  int _selectedDrawerIndex = -1;
  int _selectedBottomBarIndex = 0;

  bool get isPanelVisible {
    final AnimationStatus animationStatus = animationController.status;
    return animationStatus == AnimationStatus.completed ||
        animationStatus == AnimationStatus.forward;
  }

  @override
  void initState() {
    super.initState();
    animationController = new AnimationController(
        vsync: this, duration: new Duration(milliseconds: 100), value: 1.0);
  }

  @override
  void dispose() {
    super.dispose();
    animationController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    /*var drawerOptions = <Widget>[];
    for (var i = 0; i < drawerItems.length; i++) {
      var d = drawerItems[i];
      drawerOptions.add(new ListTile(
        leading: new Icon(d.icon),
        title: new Text(
          d.title,
          style: TextStyle(color: Colors.grey),
        ),
        selected: i == _selectedDrawerIndex,
        onTap: () => _onDrawerSelectItem(i),
      ));
    }

    var bottomBarOptions = <Widget>[];
    for (var i = 0; i < bottomBarItems.length; i++) {
      var d = bottomBarItems[i];
      bottomBarOptions.add(new IconButton(
        icon: new Icon(d.icon),
        onPressed: () {
          print("Pressed Home button!");
          _getBottomBarItemWidget(1);
        },
      ));
    }*/

    return new Scaffold(
      appBar: new AppBar(
        backgroundColor: kPubBgColor,
        bottomOpacity: 100.0,
        centerTitle: true,
        elevation: 1.0,
        leading: new IconButton(
            icon: new AnimatedIcon(
                icon: AnimatedIcons.close_menu,
                progress: animationController.view),
            onPressed: () {
              animationController.fling(velocity: isPanelVisible ? -1.1 : 1.0);
            }),
        title: SizedBox(
          height: 35.0,
          child: Image.asset('assets/images/my_pub_logo.png'),
        ),
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 12.0),
            child: Icon(Icons.refresh),
          )
        ],
      ),
      body: new Center(
        child: new Text(
          "Body",
          style: TextStyle(color: Colors.red),
        ),
      ),
      /*_getDrawerItemWidget(_selectedDrawerIndex),*/
      /*bottomNavigationBar: new Container(
        color: Colors.white,
        height: 50.0,
        alignment: Alignment.center,
        child: new BottomAppBar(
          child: new Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: bottomBarOptions,
          ),
        ),
      ),
      drawer: new Drawer(
        child: new Column(
          children: <Widget>[
            new UserAccountsDrawerHeader(
              accountName: new Text("André Bento"),
              accountEmail: new Text("andrepbento@mail.com"),
              currentAccountPicture:
                  Image.asset('assets/images/my_pub_icon.PNG'),
              onDetailsPressed: () {
                print("Details pressed");
              },
            ),
            new Column(children: drawerOptions)
          ],
        ),
      ),*/
    );
  }

  _getDrawerItemWidget(int pos) {
    switch (pos) {
      //case 0:
      //  return new HomeFragment();
      case 0:
        return new PubsFragment();
      case 1:
        return new ItemsFragment();
      /* TODO: implement
      case n:
        return new StatsFragment();
      */

      default:
        return new Text("Error");
    }
  }

  _getBottomBarItemWidget(int pos) {
    switch (pos) {
      case 1:
        return new HomeFragment();
      /* TODO: Implement
      case 2:
        return new SearchFragment();
      case 3:
        return new CartFragment();*/
    }
  }

  _onDrawerSelectItem(int index) {
    setState(() {
      _selectedDrawerIndex = index;
      _selectedBottomBarIndex = -1;
    });
    Navigator.of(context).pop(); // close the drawer
  }

  _onBottomBarSelectItem(int index) {
    setState(() {
      _selectedDrawerIndex = -1;
      _selectedBottomBarIndex = index;
    });
  }
}

class DrawerItem {
  String title;
  IconData icon;

  DrawerItem(this.title, this.icon);
}

class BottomBarItem {
  IconData icon;

  BottomBarItem(this.icon);
}
