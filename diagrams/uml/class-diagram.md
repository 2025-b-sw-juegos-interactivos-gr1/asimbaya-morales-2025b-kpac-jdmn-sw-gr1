# UML — Diagrama de Clases Conceptual (v1)

Clases principales:

class GameBootstrap
- +start()
- +loadScene()

class LevelDirector
- +currentBeat
- +advanceBeat()
- +triggerEvent(eventId)
depends on ObjectiveSystem, CheckpointSystem, LogRepository

class GameState
- +objectiveId
- +o2Level
- +radiationExposure
- +checkpointId
aggregates SaveSnapshot

class PlayerController
- +move()
- +look()
- +interact()
uses InteractionController, O2System, RadiationSystem

class InteractionController
- +canInteract(target)
- +interact(target)
depends on Terminal, ObjectiveSystem

class DroneAI
- +state
- +update()
- +onPerception(signal)
uses DronePerception, EventBus

class DronePerception
- +hasLineOfSight(player)
- +heardNoise(level)
signals DroneAI

class O2System
- +o2
- +consume(dt)
- +recover(amount)
publishes events via EventBus

class RadiationSystem
- +exposure
- +applyZoneExposure(dt)
- +decay()
publishes events via EventBus

class CheckpointSystem
- +currentCheckpoint
- +reachCheckpoint(id)
- +createSnapshot()
uses GameState, publishes events

class ObjectiveSystem
- +currentObjective
- +setObjective(id)
- +completeObjective(id)
publishes events

class Terminal
- +terminalId
- +activateNode(nodeId)
- +showLogs()
uses LogRepository, ObjectiveSystem

class LogRepository
- +getLogsByBeat(beatId)
- +getLog(logId)
contains LogEntry

class LogEntry
- +id
- +title
- +lines[]
- +beatId

class UIHUD
- +renderO2(o2)
- +renderRadiation(exposure)
- +renderDroneState(state)
- +renderObjective(text)
subscribes to EventBus

class UIScreens
- +openMenu()
- +openPause()
- +openTerminal()
- +openGameOver()
subscribes to events + user input

class AudioDirector
- +setLayer(mood)
- +playSFX(id)
subscribes to EventBus

class EventBus (service)
- +subscribe(eventType, handler)
- +publish(eventType, payload)

Relaciones clave:
- PlayerController --> (uses) InteractionController
- InteractionController --> Terminal
- Terminal --> LogRepository, ObjectiveSystem
- DroneAI --> DronePerception
- O2System/RadiationSystem/ObjectiveSystem/CheckpointSystem --> EventBus (publish)
- UIHUD/AudioDirector/UIScreens --> EventBus (subscribe)
- CheckpointSystem --> GameState (snapshot)
- LevelDirector --> ObjectiveSystem/CheckpointSystem/LogRepository
