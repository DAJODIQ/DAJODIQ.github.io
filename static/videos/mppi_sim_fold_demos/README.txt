FLASH cloth-fold demo videos — 3 simulators per case
=====================================================
Vanilla MPPI diagonal fold, same seed / cost / cloth asset across sims.
Each subfolder = one (K, seed) case, with 3 videos: newton.mp4, isaac_lab.mp4, flash.mp4.
1920x1920, 25 fps. KP err. = settled pick<->target corner distance (lower = better).

GROUP A — FLASH wins big (both baselines fail badly):
  K64_seed949     FLASH  1.27 cm | Isaac  5.58 cm | Newton 18.61 cm
  K256_seed1741   FLASH  1.49 cm | Isaac 15.56 cm | Newton 30.85 cm
  K512_seed6513   FLASH  0.80 cm | Isaac 19.56 cm | Newton 31.75 cm

GROUP B — all three succeed (<5 cm), FLASH still best:
  K64_seed5677    FLASH  0.66 cm | Isaac  4.05 cm | Newton  3.85 cm
  K256_seed5326   FLASH  1.96 cm | Isaac  3.74 cm | Newton  3.42 cm
  K512_seed7170   FLASH  0.88 cm | Isaac  2.62 cm | Newton  4.89 cm
