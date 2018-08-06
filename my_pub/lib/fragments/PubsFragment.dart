import 'package:flutter/material.dart';

class PubsFragment extends StatefulWidget {
  @override
  _PubsFragmentState createState() => _PubsFragmentState();
}

class _PubsFragmentState extends State<PubsFragment> {
  @override
  Widget build(BuildContext context) {
    return new Center(
      child: new Text(
        'PubsFragment',
        style: TextStyle(color: Colors.red),
      ),
    );
  }
}
