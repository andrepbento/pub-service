import 'package:flutter/material.dart';
import 'package:my_pub/screens/home_screen.dart';
import 'package:my_pub/screens/login_screen.dart';

final routes = {
  '/': (BuildContext context) => LoginScreen(),
  '/login': (BuildContext context) => LoginScreen(),
  '/home': (BuildContext context) => HomeScreen(),
};
