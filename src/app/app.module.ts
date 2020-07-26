import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { citiesReducer, cityReducer } from './state/cities/cities.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { CitiesEffects } from './state/cities/cities.effects';
import { DaysWeatherEffects } from './state/days-weather/days-weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { daysWeatherReducer } from './state/days-weather/days-weather.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { MaterialModule } from './material.module';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BaseComponent } from './components/base/base.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { favoritesReducer } from './state/favorites/favorites.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HomeComponent,
    BasePageComponent,
    AutoCompleteComponent,
    CityDetailsComponent,
    LayoutComponent,
    BaseComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    NguiAutoCompleteModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        cities: citiesReducer,
        city: cityReducer,
        daysWeather: daysWeatherReducer,
        favorites: favoritesReducer
      }),
    EffectsModule.forRoot([CitiesEffects, DaysWeatherEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
