import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:my_pub/colors.dart';
import 'package:my_pub/routes.dart';
import 'package:my_pub/screens/home_screen.dart';
import 'package:my_pub/supplemental/cut_corners_border.dart';

class MyPubApp extends StatefulWidget {
  @override
  _MyPubAppState createState() => _MyPubAppState();
}

class _MyPubAppState extends State<MyPubApp> {
  final _appTitle = 'My Pub';

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      home: new HomeScreen(
        title: _appTitle,
      ),
      routes: routes,
      title: _appTitle,
      theme: _kPubTheme,
    );
  }
}

Route<dynamic> _getRoute(RouteSettings settings) {
  if (settings.name != '/login') {
    return null;
  }

  return MaterialPageRoute<void>(
    settings: settings,
    builder: (BuildContext context) => LoginScreen(),
    fullscreenDialog: true,
  );
}

final ThemeData _kPubTheme = _buildPubTheme();

IconThemeData _customIconTheme(IconThemeData base) {
  return base.copyWith(color: kPubWhite);
}

ThemeData _buildPubTheme() {
  final ThemeData base = ThemeData.light();
  return base.copyWith(
      accentColor: Colors.black,
      primaryColor: Colors.black,
      buttonColor: Colors.green,
      scaffoldBackgroundColor: Colors.white,
      cardColor: Colors.orange,
      textSelectionColor: Colors.pink,
      errorColor: kPubErrorRed,
      buttonTheme: ButtonThemeData(
        textTheme: ButtonTextTheme.accent,
      ),
      primaryIconTheme: base.iconTheme.copyWith(color: Colors.brown),
      inputDecorationTheme: InputDecorationTheme(
        border: CutCornersBorder(),
      ),
      textTheme: _buildPubTextTheme(base.textTheme),
      primaryTextTheme: _buildPubTextTheme(base.primaryTextTheme),
      accentTextTheme: _buildPubTextTheme(base.accentTextTheme),
      iconTheme: _customIconTheme(base.iconTheme),
  );
}

TextTheme _buildPubTextTheme(TextTheme base) {
  return base
      .copyWith(
        headline: base.headline.copyWith(
          color: Colors.black,
          fontWeight: FontWeight.w500,
        ),
        title: base.title.copyWith(fontSize: 18.0),
        caption: base.caption.copyWith(
          fontWeight: FontWeight.w400,
          fontSize: 14.0,
        ),
        body2: base.body2.copyWith(
          fontWeight: FontWeight.w500,
          fontSize: 16.0,
        ),
      )
      .apply(
        fontFamily: "Helvetica",
        displayColor: kPubWhite,
        bodyColor: kPubWhite,
      );
}
