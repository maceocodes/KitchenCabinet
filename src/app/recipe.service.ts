import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs'; //HTTPClient methods return RxJS Observables
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  //inject MessageService into HeroService which is injected into the RecipeComponent
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    /** Log a RecipeService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`RecipeService: ${message}`);
    }
    private recipesUrl = 'api/recipes'; //URL to web api
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  //method to get recipes from HttpClient
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(_ => this.log('fetched recipes')),
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(id: number): Observable<Recipe> {
    const url = '${this.heroesUrl}/${id}';
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
       catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
       );
  } 

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap(_ => this.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


}




