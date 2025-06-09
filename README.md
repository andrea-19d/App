# Angular JSON Demo App

Acest proiect este o aplicație Angular care demonstrează încărcarea a două fișiere JSON (things și areas) dintr-un API REST local (via `assets/`) folosind două metode diferite de implementare:

## 🔧 Structură

- `ExampleService` încarcă `things.json` și `areas.json` folosind `HttpClient`
- `module1-subscribe`: Componentele folosesc `subscribe()` în TypeScript
- `module2-asyncpipe`: Componentele folosesc `async` pipe în template

## 📦 Comenzi utile

### Instalare

```npm install```

Pornire aplicație:

```ng serve```

Lint:

```npm run lint```

Prettier:

```npm run format```

Stylelint (pentru SCSS):

```npm run lint:style```

## 🧱 Module

- Module1SubscribeModule – /module1
- Module2AsyncPipeModule – /module2

## 🎯 Best Practices

- Componentele au changeDetection: ChangeDetectionStrategy.OnPush
- Serviciul este injectabil global
- Arhitectură modulară separată

## 🧪 Testare

Testare manuală: navighează la /module1 și /module2 și verifică că datele sunt afișate corect.