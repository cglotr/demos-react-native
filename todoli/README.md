# Todoli App

## Android

**Query for devices**

1. `adb devices` - This will list device ids

**Connect to ADB shell**

1. `adb -s <device-id> shell`

**Accessing SQLite DB**

1. `adb -s <device-id> shell`
2. `sqlite3 data/data/com.todoli/databases/TodoliApp.db`

**Generate signed APK**

1. `cd android`
2. `./gradlew assembleRelease`
3. `android/app/build/outputs/apk/release/app-release.apk` - APK file location
