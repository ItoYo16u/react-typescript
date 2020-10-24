import {ColorTheme,Ink} from "./color_helper"
export enum FontSize {
  Xs = 12,
  Small = 14,
  Medium= 16,
  Large= 24,
  XLarge = 32,
  LineHeight = 32
}

export enum TypographyColorTheme {
  Sucess = ColorTheme.Sucess,
  Info = ColorTheme.Info,
  Warn = ColorTheme.Warning,
  Error = ColorTheme.Error,
  Plain = Ink.Medium,
  Caption = Ink.Light,
  Link = ColorTheme.Primary,
  Strong = Ink.Dark,
  Placeholder = Ink.Light,
  StrikeThrough = Ink.Faint
}

