export enum ColorTheme {
  Primary = "#38488f",
  Secondary = "",
  PrimaryAccent = "",
  SecondaryAccent = "",
  PrimaryPale = "",
  SecondaryPale = "",
  BackGround = "rgba(247,247,247,1)",
  BackGroundOpaque = "rgba(247,247,247,.8)",
  Disabled = "rgba(178, 183, 184,1.0)",
  Sucess = "",
  Info ="",
  Warning = "",
  Error = "",
  Shadow = "rgba(67,133,187,.07)",
  ShadowHovered = "rgba(67,133,187,.07)",
  PaleShadow = "rgba(67,133,187,.07)",
  PaleShadowHovered = "rgba(67,133,187,.07)",
  DeepShadow = "rgba(67,133,187,.07)",
  DeepShadowHovered = "rgba(67,133,187,.07)",
}

export enum Ink {
  Dark = "#000000",
  Medium = "#888888",
  Light = "#bdbdbd",
  Pale = "#bbbbbb",
  Faint = "#eeeeee"
}

export enum CanvasColor {
  PaperPrimary = "#FFF",
  PaperSecondary = "",
  /** fieldの背景,コードブロック、引用など */
  Featured = "#f5f5f5",
  BlankSpace = "",
}

export enum ButtonColorTheme {
  ActiveColor = ColorTheme.Primary,
  OutLinedButtonTextColor = ColorTheme.Primary,
  FilledButtonTextColor = CanvasColor.PaperPrimary,
  DisabledColor = ColorTheme.Disabled,
}

export enum ContentColorTheme {
  Title = Ink.Dark,
  SubTitle = Ink.Medium,
  Caption = Ink.Light,
  PlainText = Ink.Dark,
}