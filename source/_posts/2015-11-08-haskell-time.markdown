---
layout: post
title: "UTCTime, UnixTime, POSIXTime, EpochTime, ZonedTime and ClockTime"
date: 2015-11-08 13:00:22 +0100
comments: true
categories:
  - 2015
  - haskell
  - listing
  - time
---
Let us discuss time formats in Haskell. There are several different
names and data types. First let me show you that every data type has
his own IO action:

    time:      getCurrentTime :: IO UTCTime
    unix-time: getUnixTime    :: IO UnixTime
    time       getPOSIXTime   :: IO POSIXTime
    unix:      epochTime      :: IO EpochTime
    time:      getZonedTime   :: IO ZonedTime
    old-time:  getClockTime   :: IO ClockTime

I will not cover `ClockTime`, because it's part of a deprecated
[package][clocktime]. Next we will start a `ghci` session to see what is the
result of each function:

### [UnixTime][unixtime]:

    λ: import Data.UnixTime 
    λ: t <- getUnixTime >>= return . show . utSeconds
    λ: read t :: Int
       1446987464

You can use `toEpochTime` and `toClockTime`.

### [POSIXTime][posixtime]:

    λ: import Data.Time.Clock.POSIX
    λ: t <- getPOSIXTime >>= return . show . round
    λ: read t :: Int
       1446987600

Also, `posixSecondsToUTCTime` is part of the Library.

### [EpochTime][epochtime]:

    λ: import System.Posix.Time
    λ: t <- fmap show epochTime
    λ: read t :: Int
       1446987733

    λ: import Data.UnixTime 
    λ: fmap fromEpochTime epochTime
       UnixTime {utSeconds = 1446988206, utMicroSeconds = 0}

### [UTCTime][utctime]:

Last but not least let's take a look at the `time` package:

    λ: import Data.Time.Clock
    λ: getCurrentTime >>= return . show

       No instance for (Show UTCTime) …

What is that? `getCurrentTime` has no visual representation aka can't
be converted to a string. No, we have to import another package:

    λ: import Data.Time.Clock
    λ: import Data.Time.Format
    λ: t <- fmap show getCurrentTime
    λ: read t :: UTCTime
       2015-11-08 13:28:23.095651 UTC

Well, that is a formated time string, but is it possible to have a
simple timestamp like above. Sure:

     λ: import Data.Time.Clock
     λ: import Data.Time.Format
     λ: t <- getCurrentTime >>= return . formatTime defaultTimeLocale "%s"
     λ: read t :: Int
        1446989906

### [ZonedTime][zonedtime]:

All times we've got are in UTC. The main advantage of the `time` package
is it can handle timezones, too:

    λ: import Data.Time.LocalTime 
    λ: import Data.Time.Format 
    λ: getZonedTime >>= return . formatTime defaultTimeLocale "%Y-%m-%d, %H:%M %Z"
       "2015-11-08, 15:00 CET"

At last there is one question. How to convert a timestamp back to a
formated string:

    λ: import Data.Time.Clock
    λ: import Data.Time.Clock.POSIX 
    λ: import Data.Time.LocalTime 
    λ: import Data.Time.Format 
    λ: let s = read "1446991464" :: Int
    λ: let t x = (posixSecondsToUTCTime . realToFrac) x
    λ: utcToLocalZonedTime (t s) >>=
         return . formatTime defaultTimeLocale "%Y-%m-%d, %H:%M %Z"
       "2015-11-08, 15:04 CET"

[clocktime]: https://hackage.haskell.org/package/old-time
[unixtime]: https://hackage.haskell.org/package/unix-time
[posixtime]: https://hackage.haskell.org/package/time
[epochtime]: https://hackage.haskell.org/package/unix
[utctime]: https://hackage.haskell.org/package/time
[zonedtime]: https://hackage.haskell.org/package/time
