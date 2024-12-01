package com.theesh.request;

import lombok.Data;
import org.springframework.core.SpringVersion;

@Data
public class IngredientCategoryRequest {
    private String name;
    private Long restaurantId;
}
