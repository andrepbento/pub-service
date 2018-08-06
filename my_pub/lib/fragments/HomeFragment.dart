import 'package:flutter/material.dart';

class HomeFragment extends StatefulWidget {
  @override
  _HomeFragmentState createState() => new _HomeFragmentState();
}

class _HomeFragmentState extends State<HomeFragment> {
  @override
  Widget build(BuildContext context) {
    print("HomeFragment build");
    return new Text(
      'HomeFragment',
      textAlign: TextAlign.center,
    );
  }
}
