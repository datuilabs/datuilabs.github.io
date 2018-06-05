# Blink

A simple example

```blocks
timer.setInterval(function(){
  pins.BoardLED.write(true);
  timer.setTimeout(function(){
      pins.BoardLED.write(false);
  }, 1000);
}, 2000);
```
