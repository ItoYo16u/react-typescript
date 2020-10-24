import { CanvasColor, ColorTheme, Ink } from "../helper/color_helper";
import { BorderRadius } from "../helper/style_helper";

enum FieldSize {
  DefaultMinWidth = "240px",
  DefaultHeight = "32px",
}
export enum FieldTheme {
  Background = CanvasColor.Featured,
  FieldBorderRadius = BorderRadius.Xs,
  DefaultBorderColor = Ink.Light,
  PlaceHolderColor =  Ink.Pale,
  FocusedBorderColor = ColorTheme.Primary,
  MinWidth = FieldSize.DefaultMinWidth,
}

