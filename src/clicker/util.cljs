(ns clicker.util
  (:import [goog.string.format])
  (:require
    [goog.string :as gstring]
    [goog.i18n.NumberFormat :as nf]
    [goog.string.format]))
;
(defn log [v & text]
  (let [vs (if (string? v)
              (apply str v text)
              v)]
    (. js/console (log vs))
    v))

(defn format
  "Formats a string using goog.string.format.
   e.g: (format \"Cost: %.2f\" 10.0234)"
  [fmt & args]
  (apply gstring/format fmt args))

(defn decimal-format
  "formats decimal using the current locale"
  [n]
  (.format (goog.i18n.NumberFormat. (.-DECIMAL goog.i18n.NumberFormat.Format)) n))
;
(defn currency-format
  "formats currency using the current locale"
  [n]
  (.format (goog.i18n.NumberFormat. (.-CURRENCY goog.i18n.NumberFormat.Format)) n))