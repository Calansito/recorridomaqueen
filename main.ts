maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
basic.pause(4000)
if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
    maqueen.motorStop(maqueen.Motors.All)
} else if (maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    }
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
basic.pause(3000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
basic.pause(750)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
basic.pause(3000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(3000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
basic.pause(750)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
basic.pause(500)
if (input.lightLevel() > 70) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
} else {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    basic.pause(250)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(750)
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
basic.pause(750)
