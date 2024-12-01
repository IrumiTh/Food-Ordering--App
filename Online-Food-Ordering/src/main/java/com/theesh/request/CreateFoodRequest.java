package com.theesh.request;


import com.sun.jdi.request.StepRequest;
import com.theesh.model.Category;
import com.theesh.model.IngredientsItem;
import lombok.Data;
import org.springframework.core.SpringVersion;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private long restaurantId;
    private boolean vegetarin;
    private boolean seasional;
    private List<IngredientsItem> ingredients;





}
